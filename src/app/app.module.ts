import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {LoginComponent} from "@/account/login/login.component";
import {RegisterComponent} from "@/account/register/register.component";
import {ForgotPasswordComponent} from "@/account/forgot-password/forgot-password.component";
import {RecoverPasswordComponent} from "@/account/recover-password/recover-password.component";
import {MainComponent} from "@/dashboard/main.component";
import {HeaderComponent} from "@/dashboard/header/header.component";
import {FooterComponent} from "@/dashboard/footer/footer.component";
import {MenuSidebarComponent} from "@/dashboard/menu-sidebar/menu-sidebar.component";
import {MessagesDropdownMenuComponent} from "@/dashboard/header/messages-dropdown-menu/messages-dropdown-menu.component";
import {NotificationsDropdownMenuComponent} from "@/dashboard/header/notifications-dropdown-menu/notifications-dropdown-menu.component";
import {UserDropdownMenuComponent} from "@/dashboard/header/user-dropdown-menu/user-dropdown-menu.component";
import {LanguageDropdownComponent} from "@/dashboard/header/language-dropdown/language-dropdown.component";
import {AppButtonComponent} from "@pages/app-button/app-button.component";
import {PrivacyPolicyComponent} from "@pages/privacy-policy/privacy-policy.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountHackedComponent } from './pages/Tools/account-hacked/account-hacked.component';
import { AccountCardedComponent } from './pages/Tools/account-carded/account-carded.component';
import { DatingComponent } from './pages/Tools/dating/dating.component';
import { StuffsComponent } from './pages/Tools/stuffs/stuffs.component';
import { RDPsComponent } from './pages/Tools/rdps/rdps.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesDropdownMenuComponent,
        NotificationsDropdownMenuComponent,
        AppButtonComponent,
        UserDropdownMenuComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageDropdownComponent,
        PrivacyPolicyComponent,
        AccountHackedComponent,
        AccountCardedComponent,
        DatingComponent,
        StuffsComponent,
        RDPsComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    FormsModule,
    NgbModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
