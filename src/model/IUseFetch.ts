
export   interface IUseFetch{
    method:("get"|"post"|"put"),
    url: string, 
    data?:unknown
}

export   interface  IStateFetch{
    error:Error,
    isLoading:boolean,
    response?:unknown
}
