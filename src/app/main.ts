import { importProvidersFrom } from '@angular/core'
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'

import { AppComponent } from '@app/app.component'
import { AppRouterModule } from '@app/router/app.router.module'

bootstrapApplication(AppComponent, { providers: [importProvidersFrom(BrowserModule, AppRouterModule)]})
  .catch((err) => {
    console.error(err)
  })
