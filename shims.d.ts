declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  
  const component: DefineComponent<{}, {}, any>
  export default component
}


declare module 'vue-prism-component' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
declare module 'axios';
declare module 'vue-shepherd';

declare type ONE = {[k:string]:any}
declare type MANY = ONE[]