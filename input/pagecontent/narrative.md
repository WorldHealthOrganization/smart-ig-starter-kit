Narrative content can be used for different purposes:
* Narrative pages describing the content
* Auxiliary narrative for the resources - for example introductory text to a profile or Library.

General authoring guidance:

* Pages should only contain headings of level 3 and above - 1 or 2 are not supported. 
* [PlantUML diagrams](http://build.fhir.org/ig/FHIR/ig-guidance/diagrams.html) can be added
* All narrative pages must be listed in the ImplementationGuide resource (or equivalently in the sushi-config.yaml).

<div class="info-box must">
  <span class="info-title">Narrative pages must be listed in the ImplementationGuide</span>
    All narrative pages must be listed in the ImplementationGuide resource (or equivalently in the sushi-config.yaml). Narrative files that are not listed will not be processed or displayed.
</div>

### XHTML 
The tooling supports [xhtml](https://www.w3.org/TR/xhtml1/) pages. The file extension is `.xhtml`.

### Markdown
Markdown pages are created as files with extension `.md`. The Markdown dialect supported is [CommonMark markdown](https://commonmark.org/).

