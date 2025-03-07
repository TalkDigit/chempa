const getData = (e, type) => {
    const {locale} = useI18n()
 
    if (!e.increased) {
        if(e.element){
            return e.element.find(e => e.key == type).value[locale.value] //Element İçi veri dönüş 
        }else{
            return e.find(a => a.key == type).value[locale.value] // Modül İçi veri dönüş
        }
    }else{
        return e.element[0].value[locale.value] // Modül komponent status sorgulama
    }
    
}

export default getData