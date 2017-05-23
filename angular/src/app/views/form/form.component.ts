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
  
  constructor(private latestAdventureService: LatestAdventuresService) { }

  ngOnInit() {
  }

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
    //console.log('inside prepare data');
    let AdventuresForm = event.target.parentElement;
    console.log(AdventuresForm);
    let serializedForm = this.jsSerializeArray(AdventuresForm);
    //console.log(serializedForm);
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
        //console.log(fieldValue);
        //debugger

        if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
          if (field.type === 'select-multiple') {
            let newField = '';
            numberOfOptions  = form.elements[i].options.length;
            const currentFormLength = s.length;
            for (let j = 0; j < numberOfOptions; j++) {
              if (field.options[j].selected) {
                // this has to be modified for correct submission the old code is below
                // s[s.length] = { name: field.name, value: field.options[j].value };
                // new value needs to be a comma separated list
                newField = newField + `${field.options[j].value},`;
                s[currentFormLength] = { name: field.name, value: newField };
              }
            }
            // strip the last comma
            s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);

          } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
            s[s.length] = { name: fieldName, value: fieldValue };
          }
        }
        // if (fieldValue === "") {
        // this.shouldDisplayErrorModal = true;  
        // }; //redo this
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
      //console.log(this.shouldDisplaySuccessModal);
    } else {
      this.shouldDisplayErrorModal = true;
      //console.log(this.shouldDisplayErrorModal);
    }

    
  }

  hideSubmitModal() {
    this.shouldDisplaySuccessModal = false;
    this.shouldDisplayErrorModal = false;
    this.displayCorrectErrorModal = false;
    this.serverResponseMsg = "";
  }
}
