import { Component, OnInit } from '@angular/core';
import { LatestAdventuresService } from '../../services/latest-adventures.service';
import { Adventure } from '../../models/adventure';

 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../../../dist/min.styles.css']
})
export class FormComponent implements OnInit {

  shouldDisplaySuccessModal: boolean = false;
  shouldDisplayErrorModal: boolean = false;
  displayCorrectErrorModal: boolean = false;
  serverResponseMsg: any;
  categories: Array<string> = ['Nature', 'Sports', 'Arts', 'Travel', 'Culture', 'Food', 'Other fun stuff']
  
  model = new Adventure();
  constructor(private latestAdventureService: LatestAdventuresService) { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  validateForm(event) {
    let AdventuresForm = event.target.parentElement;
    let adventuresFormElements = AdventuresForm.elements;
    let titleValue: string = "";
    let contentValue: string = "";
    let imageValue: string = "";
    let categoriesValue: string = "";
    let formIsValid: boolean = true;
    for (let element in adventuresFormElements) {
      console.log(adventuresFormElements[element].value);
      switch (element) {
        case "title":
          titleValue = adventuresFormElements[element].value;
          console.log("title is found");
        case "content":
          contentValue = adventuresFormElements[element].value;
        case "image":
          imageValue = adventuresFormElements[element].value;
        case "categories":
          categoriesValue = adventuresFormElements[element].value;       
      }
    }
    if(titleValue.length === 0 || contentValue.length === 0 || imageValue.length === 0 || categoriesValue.length === 0) {
      formIsValid = false;
    }
    if (formIsValid === false) {
      this.displayCorrectErrorModal = true;
    } else {
      //console.log("preparing form");
      this.prepareData(event);

    }   
  }

  prepareData(event) {
    let AdventuresForm = event.target.parentElement;
    console.log(AdventuresForm);
    let serializedForm = this.jsSerializeArray(AdventuresForm);
    let jsonParams = JSON.stringify(serializedForm);
    this.onParamsReady(jsonParams);
  }


  jsSerializeArray(form) {
    let field: any;
    let numberOfOptions = 0;
    const s: Array<any> = [];
    if (typeof form === 'object' && form.nodeName === 'FORM') {
      const len: number = form.elements.length;
      for (let i = 0; i < len; i++) {
        field = form.elements[i];
        const fieldName = field.name;
        const isFieldDisabled: Boolean = field.disabled;
        const fieldType = field.type;
        const fieldValue = field.value;

        if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
          if (field.type === 'select-multiple') {
            let newField = '';
            numberOfOptions  = form.elements[i].options.length;
            const currentFormLength = s.length;
            for (let j = 0; j < numberOfOptions; j++) {
              if (field.options[j].selected) {
                newField = newField + `${field.options[j].value},`;
                s[currentFormLength] = { name: field.name, value: newField };
              }
            }
            s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);

          } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
            s[s.length] = { name: fieldName, value: fieldValue };
          }
        }
      }
    }
  return s;

};

  onParamsReady(parameters) {
    //console.log(parameters);
    let postAdventurePromise = this.latestAdventureService.postAdventures(parameters);
    postAdventurePromise.then(this.displaySubmitModal.bind(this));
  };

  displaySubmitModal(response) {
    this.serverResponseMsg = JSON.parse(response._body);
    
    if (this.serverResponseMsg.post_created) {
      this.shouldDisplaySuccessModal = true;
    } else {
      this.shouldDisplayErrorModal = true;
    }

    
  }

  hideSubmitModal() {
    this.shouldDisplaySuccessModal = false;
    this.shouldDisplayErrorModal = false;
    this.displayCorrectErrorModal = false;
    this.serverResponseMsg = "";
  }
}
