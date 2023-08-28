### Conventions
* Case names used in this document: 
  - camelCase 
  - PascalCase
* This document uses the capitalized keywords SHOULD, SHALL, MAY, SHOULD NOT, SHALL NOT as described in [RFC2119](https://datatracker.ietf.org/doc/html/rfc2119)

* Canonicals:
* Codesystem urls:



**Resource IDs**
* ValueSets should be prefixed or suffixed by VS (not enforced)
* Codesystems do not need to to be prefixed or suffixed. The tooling shall handle the resources per type and ID, so there's no conflict
* Resource Ids should start with capital letter and may contain hyphens - NOT underscore: 
  * ResourceId
  * Resource-id

FileNames
* For json or xml content, the file name SHALL be in the form
  * ResourceType-resourceid.xml
  * ResourceType/resourceid.xml
*   * resourceid.* xm  * l

* For fsh content, the file name SHALL be in the form
  * ResourceType-resourceid.fsh
