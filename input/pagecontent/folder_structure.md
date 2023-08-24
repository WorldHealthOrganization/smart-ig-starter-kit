L3 Folder and file structure
For non-FSH source files, the current folder structure is the one in the base IG template:

'input/models'
'input/examples'
'input/vocabulary'  → WHO IG will add “valuesets” and “codesystems” and “namingsystems”?
'input/profiles'
'input/extensions'
'input/operations'
'input/resources'
'input/maps'
'input/testing'

These are the folders where the FHIR tooling looks for content - FHIR resources

* For FSH, replicate that convention when possible
  * Example:
    * input/fsh/profiles.fsh
    * input/fsh/profiles/*.fsh
    * This depends on the amount of files - a single file should normally not contain more than 10 resources / 300 lines or so
  * Throughout the remainder of this document, the designation for this set of possibilities shall be “file and folder names: input/actors” - which reads as the options above - for FHIR resources or FSH content.

* Fsh Directory structure 
  * Logical Models – models
  * Invariants - merge to the “parent” resources - profiles and models?
  * Examples ok
  * ValueSets - currently in vocabulary - we can split. Do we?
  * Workflow Requests 
  * Workflow Definitions 
* One file per logical model 
  * One file per invariant 
  * One file per example 
 
* FSH ruleset and aliases should go into dedicated files in reserved folders
  * Rationale: Mostly to avoid repetition of aliases
  * Example: 
    * input/fsh/rules.fsh
    * input/fsh/rules/*.fsh
    * input/fsh/aliases.fsh
    * input/fsh/aliases/*.fsh (if really needed)
* Narrative is in folder pagecontent
* Diagram sources (plantuml) are in images-source
