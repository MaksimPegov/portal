import { NgModule } from '@angular/core';
import { KeysPipe, LoginProviders } from './enums';

@NgModule({
  declarations: [KeysPipe],
  exports: [KeysPipe]
})
export class SharedModule{}