This page documents how FHIR Implementation Guides support multi-language implementations. 

### Multi-Language Support in FHIR
* HL7 provides the following [guide](https://www.hl7.org/fhir/languages.html) around its support for multiple languages in FHIR

### **Adding translations to artifacts**
* Typically translations are added to artifacts by adding a translation extension to elements. 
* The extension for translation is defined [here](https://build.fhir.org/ig/HL7/fhir-extensions/StructureDefinition-translation.html)


### **Files Conveying Translations**
* PO files are used to store translations. Read more about PO files [here](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html).


### **Tooling**
* [GNU gettext](https://www.gnu.org/software/gettext/)
  * [gettext-tools-windows](https://github.com/vslavik/gettext-tools-windows)*