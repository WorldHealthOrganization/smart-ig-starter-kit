In addition to the 

## L2 Activities - L3 Resources

This table defines the standard profiles for common activities. These will be part of a separate publication.

| Activity (L2)| Meaning / usage scenario and notes| Profile name| Base resource (R4)    |
|-------|------|----|------|
| Issue information that patient is candidate for vaccination | When intended for awareness, not for planning any care provision | SGCommunicationRequest| CommunicationRequest   |
| Issue vaccine recommendation | When a decision system, based on rules, proposes vaccination against a specific disease   | [SGVaccinationProposal](https://worldhealthorganization.github.io/smart-immunizations-measles/StructureDefinition-SGVaccineProposal.html)| MedicationRequest|
| Confirm vaccine request  | (typically with some details e.g. "MMR" instead of "measles")| [SGVaccineRequest](https://worldhealthorganization.github.io/smart-immunizations-measles/StructureDefinition-SGVaccineRequest.html)   | MedicationRequest|
| Report immunization done/not done| When the immunization record is being entered as draft, and when the record is finalized  | [SGImmunization](https://worldhealthorganization.github.io/smart-immunizations-measles/StructureDefinition-SGImmunization.html)   | Immunization|
{:.table-bordered.full-width}  
