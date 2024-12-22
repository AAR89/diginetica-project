function getProductAttributes() {
  const attributes = {};

  const names = document.querySelectorAll(
    ".tab-pane-product-parameters-block > ul > li"
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
