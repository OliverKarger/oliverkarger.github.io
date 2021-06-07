import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {tap, filter} from 'rxjs/operators';
import * as config from '../config';

declare let gtag: Function;

@Injectable()
export class GoogleAnalyticsService {
  private googleAnalyticsId: string;
  private renderer2: Renderer2;
  private scriptsLoaded: boolean = false;

  constructor(
    private rendererFactory2: RendererFactory2,
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router,
  ) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    this.googleAnalyticsId = config.GoogleAnalytics.token;
  }

  init() {
    if (!this.scriptsLoaded) {
      this.insertMainScript();
    }
  }

  private insertMainScript() {
    if (this.googleAnalyticsId) {
      const script: HTMLScriptElement = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.onload = this.insertSecondHalfOfScript.bind(this);
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.googleAnalyticsId}`;
      script.text = '';
      this.renderer2.appendChild(this._document.body, script);
    }
  }

  private insertSecondHalfOfScript() {
    const script: HTMLScriptElement = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = './assets/google-analytics.js';
    script.text = '';
    this.renderer2.appendChild(this._document.body, script);
    script.onload = () => {
      this.scriptsLoaded = true;
    };
  }

  trackSinglePageView(event: NavigationEnd) {
    if (this.googleAnalyticsId && this.scriptsLoaded) {
      gtag('config', this.googleAnalyticsId, {
        page_path: event.urlAfterRedirects,
      });
    }
  }
  trackPageViews() {
    return this._router.events.pipe(
      filter(() => this.scriptsLoaded === true),
      filter((evt: any) => evt instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        this.trackSinglePageView(event);
      }),
    );
  }
}
