/*
  Pipe de traducción.
*/

// Basic imports
import { Pipe, PipeTransform } from '@angular/core';

// Services
import { LanguageService } from '../services';

@Pipe({
    name: 'language',
    pure: false
})

export class LanguagePipe implements PipeTransform {  
  private text: string;

  constructor(    
    private languageService: LanguageService    
  ){    
    
  }

  transform(
    text:     string,
    language: string,
  ): string {   

    this.getText(text);
    return this.text;    
  }
  
  private getText(text): void {       
    return text;

    /*
    this.languageService
      .getText(text)
      .then(data => {      
        this.text = data;
      });    
    */
  }  

  private getLanguageRsJX(text): void {
    this.languageService
      .getTextRsJX(text)    
      .subscribe(response => {      
        debugger;
        
        this.text = response;        
      });
  }
}
