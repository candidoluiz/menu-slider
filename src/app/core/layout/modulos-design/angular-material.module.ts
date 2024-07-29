import { NgModule } from "@angular/core";
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

const imports = [
    MatIconModule
]

@NgModule({
    imports: [imports],
    exports: [imports],
})
export class AngularMaterialModule {

    constructor(
        private registro: MatIconRegistry,
        private domSanitizer: DomSanitizer,
    ) {
        this.registro.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/mdi.svg"))

    }
}
