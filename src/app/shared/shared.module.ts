import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    FlexLayoutModule, MaterialModule, FormsModule, HttpClientModule
  ],
  exports: [
    FlexLayoutModule, SearchComponent, MaterialModule, FormsModule, HttpClientModule
  ]
})
export class SharedModule { }