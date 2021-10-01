import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-app';
  direction

  constructor(
    public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ar/) ? browserLang : "en");
    this.init();
  }

  private init() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = this.translate.currentLang === "ar" ? "rtl" : "ltr";
    });
  }

}
