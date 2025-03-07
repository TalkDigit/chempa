export const useExample = defineStore('Example', () => {

    const exampleState = ref(null)

    const fetchExample = async () => {

        await useCustomFetch('/moduldata/example', {
            method : 'POST',
            query : {
                addtional : {
                    where : {
                        status : true
                    }
                }
            }
        })
        .then(response => {
            if(!response.data.value.success){
                Page.value = 404;
                return false
            }
            exampleState.value = response.data.value.data
        })
    }

    return {
        exampleState,
        fetchExample,
    }
})