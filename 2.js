function getProductAttributes() {
  const attributes = {};

  const names = document.querySelectorAll(
    "#tab1 > div.tab-pane-product-desc-main > div.tab-pane-product-desc-parameters > div:nth-child(1) > ul > li"
  );

  names.forEach((name) => {
    let attributeName = name.querySelector(`div.parameter-name`);

    while (attributeName.childNodes.length > 1) {
      attributeName.removeChild(attributeName.lastChild);
    }

    const attributeValue = name.querySelector(`div.parameter-value`);

    attributes[attributeName.textContent.trim()] =
      attributeValue.textContent.trim();
  });

  console.log(attributes);
  return attributes;
}

getProductAttributes();
