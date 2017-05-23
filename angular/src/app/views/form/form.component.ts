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
  serverResponseMsg: any;
  categories: Array<string> = ['Nature', 'Sports', 'Arts', 'Travel', 'Culture', 'Food', 'Other fun stuff']
  
  constructor(private latestAdventureService: LatestAdventuresService) { }

  ngOnInit() {
  }

  prepareData(event) {
    //console.log('inside prepare data');
    let AdventuresForm = event.target.parentElement;
    //console.log(AdventuresForm);

    let serializedForm = this.jsSerializeArray(AdventuresForm);
    console.log(serializedForm);
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
    //console.log(response);
    this.serverResponseMsg = JSON.parse(response._body);
    //console.log(this.serverResponseMsg);
    //let parsedServerResponseObj = JSON.parse(response._body);
    //console.log(parsedServerResponseObj);
    //{"error":{"type":"post","code":"the title\/content has to be greater than 8 characters ... Jermey"}}
    //{"post_created":"post has been created with the ID of : 221"}
  

     //.indexOf() && .lastIndexOf()
    
    if (this.serverResponseMsg.post_created) {
      this.shouldDisplaySuccessModal = true;
      //console.log(this.shouldDisplaySuccessModal);
    } else {
      this.shouldDisplayErrorModal = true;
      //console.log(this.shouldDisplayErrorModal);
    }

    
  }

  hideSubmitModal() {
    //console.log("inside hideSubmitModal");
    //debugger;
    this.shouldDisplaySuccessModal = false;
    //console.log(this.shouldDisplaySuccessModal);
    this.shouldDisplayErrorModal = false;
    this.serverResponseMsg = "";
  }
}
