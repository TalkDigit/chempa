const getData = (e, type) => {
    const {locale} = useI18n()
 
    if (!e.increased) {
        if (e.element) {
            const foundElement = e.element.find(e => e.key === type);
            if (foundElement && foundElement.value && foundElement.value[locale.value]) {
                return foundElement.value[locale.value];
            }
        }else{
            return e.find(a => a.key == type).value[locale.value] 
        }
    }else{
        return e.element[0].value[locale.value] 
    }
    
}

export default getData