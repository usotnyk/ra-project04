import { Component, OnInit } from '@angular/core';
import { LatestAdventuresService } from '../../services/latest-adventures.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../../../dist/min.styles.css']
})
export class FormComponent implements OnInit {

  constructor(private latestAdventureService: LatestAdventuresService) { }

  ngOnInit() {
  }

  prepareData(event) {
    console.log('inside prepare data');
    let AdventuresForm = event.target.parentElement;
    console.log(AdventuresForm);

    let serializedForm = this.jsSerializeArray(AdventuresForm);
    console.log(serializedForm);
    let jsonString = JSON.stringify(serializedForm);
    console.log(jsonString);
    let paramsObject = { params : jsonString }
    console.log(paramsObject);
    this.onParamsReady();
    return paramsObject;
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


  onParamsReady() {
    this.latestAdventureService.postAdventures();
  };

}
