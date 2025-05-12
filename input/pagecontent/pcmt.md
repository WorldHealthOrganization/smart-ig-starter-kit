<figure style = "width:65em">
  {% include pcmt.svg %}
</figure>

### **PCMT**
The PCMT Implementation Guide(IG) hosts structures that support hosting Product Catalogs and Product Authorization data.

The IG contains:
- Models for Product, Product Authorization

### **PCMT-VAXPREQUAL**
This IG hosts the WHO prequalified Vaccines Database. The IG depends on the PCMT IG. Through the use of APIs the IG is kept up-to-date with the evolving list of prequalified vaccines.

The IG contains:
- WHO Prequalified vaccines as instances of Product Authorization

<table><thead>
  <tr>
    <th>Prequalified Vaccines Database</th>
    <th>Mappings to Product and Product Authorization</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Vaccine&nbsp;&nbsp;&nbsp;Type</td>
    <td>Product.classification</td>
  </tr>
  <tr>
    <td>Commercial Name</td>
    <td>Product.name</td>
  </tr>
  <tr>
    <td>Presentation</td>
    <td>Product.dosageForm</td>
  </tr>
  <tr>
    <td>No. of doses</td>
    <td>Product.doseQuantity</td>
  </tr>
  <tr>
    <td>Manufacturer</td>
    <td>Product.manufacturer</td>
  </tr>
  <tr>
    <td>Responsible NRA</td>
    <td>productAuthorization.holder</td>
  </tr>
</tbody>
</table>

### **ICVP**
The ICVP IG depends on the pcmt-vaxprequal IG and supports the prequalified vaccine products for Yellow Fever and Polio.
