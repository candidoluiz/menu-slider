import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from "../core/layout/modulos-design/angular-material.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AngularMaterialModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        AngularMaterialModule
    ],
})
export class SharedModule { }