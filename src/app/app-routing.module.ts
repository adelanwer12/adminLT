import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from '@pages/profile/profile.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {MainComponent} from "@/dashboard/main.component";
import {LoginComponent} from "@/account/login/login.component";
import {RegisterComponent} from "@/account/register/register.component";
import {ForgotPasswordComponent} from "@/account/forgot-password/forgot-password.component";
import {RecoverPasswordComponent} from "@/account/recover-password/recover-password.component";
import {PrivacyPolicyComponent} from "@pages/privacy-policy/privacy-policy.component";
import {AccountHackedComponent} from "@pages/Tools/account-hacked/account-hacked.component";
import {AccountCardedComponent} from "@pages/Tools/account-carded/account-carded.component";
import {DatingComponent} from "@pages/Tools/dating/dating.component";
import {StuffsComponent} from "@pages/Tools/stuffs/stuffs.component";
import {RDPsComponent} from "@pages/Tools/rdps/rdps.component";

const routes: Routes = [
    {path: '',component: MainComponent,canActivate: [AuthGuard],canActivateChild: [AuthGuard],
        children: [
          {path: 'profile',component: ProfileComponent},
          {path: 'accounthacked',component: AccountHackedComponent},
          {path: 'accountcarded',component: AccountCardedComponent},
          {path: 'Dating',component: DatingComponent},
          {path: 'stuffs',component: StuffsComponent},
          {path: 'RDPs',component: RDPsComponent},
          {path: '',component: DashboardComponent}
        ]
    },
    {path: 'login',component: LoginComponent,canActivate: [NonAuthGuard]},
    {path: 'register',component: RegisterComponent,canActivate: [NonAuthGuard]},
    {path: 'forgot-password',component: ForgotPasswordComponent,canActivate: [NonAuthGuard]},
    {path: 'recover-password',component: RecoverPasswordComponent,canActivate: [NonAuthGuard]},
    {path: 'privacy-policy',component: PrivacyPolicyComponent,canActivate: [NonAuthGuard]},
    {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
