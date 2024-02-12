import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader';
import county from '@salesforce/resourceUrl/county';
export default class Counties extends LightningElement {

  countyList = [];
  state = 'Virginia';
  connectedCallback() {
    Promise.all([
      loadScript(this, county)
    ])
      .then(() => {
        console.log('Script loaded');
        console.log(county);
        this.countyList = countiesJS.findCountiesByState('virginia');
      })
      .catch(error => {
        console.log('Error loading script');
      });
  }
}