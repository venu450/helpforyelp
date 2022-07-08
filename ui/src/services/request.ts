const getParams = (params: any) => new URLSearchParams(params).toString();

const  ACCESS_TOKEN = "kOyyLrz6tbmSwEVijiKA5KSv3v3E7CZzXeHawltl3D2jXBxk7nNaY-GqTeYUKgUwl018k3uK6YTxSbBBNcdpWaBglleohzq9YAZ1FXRjDbo5yA7I8pIIIGhNOhizYnYx";

const requestDownloadFile = function (options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(
      options.params
        ? `${options.url}?${getParams(options.params)}`
        : options.url,
      options
    )
      .then((response: Response) => {
        if (response.ok && response.status === 200) {
          response
            .blob()
            .then((blob) => {
              const url = window.URL.createObjectURL(blob);
              const filename = response.headers
                .get("Content-Disposition")
                ?.split("filename=")[1]
                .replaceAll('"', "");
              resolve({
                url,
                filename,
                blob,
              });
            })
            .catch((error) => {
              console.log(error);
              reject(
                error.message
                  ? error.message.toString()
                  : "Error Downloading File!"
              );
            });
        } else {
          reject("Error downloading File");
        }
      })
      .catch((error) => {
        console.log(error);
        reject(
          error.message
            ? error.message.toString()
            : "Error performing the Action!"
        );
      });
  });
};

const request = function (options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    fetch(
      options.params
        ? `${options.url}?${getParams(options.params)}`
        : options.url,
      options
    )
      .then((response) => {
        response.text().then((data) => {
          if (response.ok && response.status === 200) {
            resolve({
              ok: response.ok,
              status: response.status,
              data: data?.length > 0 ? JSON.parse(data) : undefined,
            });
          } else {
            reject(
              JSON.parse(data)?.message
                ? JSON.parse(data)?.message.toString()
                : "Error performing the Action!"
            );
          }
        });
      })
      .catch((error) => {
        console.log(error);
        reject(
          error.message
            ? error.message.toString()
            : "Error performing the Action!"
        );
      });
  });
};

const getUrl = (segments: any, url: urlType): string =>
  typeof url === "string" ? url : url(segments);





export const GET =
  (url: urlType): any =>
  ({
       segments,
       params,
       body,
       headers = {
           Accept: ["application/json", "text/plain", "*/*"],
           "Content-Type": "application/json",
           Authorization: `Bearer ${ACCESS_TOKEN}`,

       },
   }: optionsType) =>
    request({
        params: params,
        body: body,
        headers: headers,
        method: "get",
        url: getUrl(segments, url) });

export const POST =
  (url: urlType): any =>
  ({
    segments,
    params,
    body,
    headers = {
      Accept: ["application/json", "text/plain", "*/*"],
      "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        //Authorization: "Bearer kOyyLrz6tbmSwEVijiKA5KSv3v3E7CZzXeHawltl3D2jXBxk7nNaY-GqTeYUKgUwl018k3uK6YTxSbBBNcdpWaBglleohzq9YAZ1FXRjDbo5yA7I8pIIIGhNOhizYnYx",


    },
  }: optionsType) =>
    request({
      params: params,
      body: body,
      headers: headers,
      method: "post",
      url: getUrl(segments, url),
    });

export const PUT =
  (url: urlType): any =>
  ({
    segments,
    params,
    body,
    headers = {
      Accept: ["application/json", "text/plain", "*/*"],
      "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        //Authorization: "Bearer kOyyLrz6tbmSwEVijiKA5KSv3v3E7CZzXeHawltl3D2jXBxk7nNaY-GqTeYUKgUwl018k3uK6YTxSbBBNcdpWaBglleohzq9YAZ1FXRjDbo5yA7I8pIIIGhNOhizYnYx",


    },
  }: optionsType) =>
    request({
      params: params,
      body: body,
      headers: headers,
      method: "put",
      url: getUrl(segments, url),
    });

export const DELETE =
  (url: urlType): any =>
  ({
       segments,
       params,
       body,
       headers = {
           Accept: ["application/json", "text/plain", "*/*"],
           "Content-Type": "application/json",
           Authorization: `Bearer ${ACCESS_TOKEN}`,
           //Authorization: "Bearer kOyyLrz6tbmSwEVijiKA5KSv3v3E7CZzXeHawltl3D2jXBxk7nNaY-GqTeYUKgUwl018k3uK6YTxSbBBNcdpWaBglleohzq9YAZ1FXRjDbo5yA7I8pIIIGhNOhizYnYx",


       },
   }: optionsType) =>
    request({
        params: params,
        body: body,
        headers: headers,
      method: "delete",
      url: getUrl(segments, url),
    });

type urlFnType = (v: any) => string;
type urlType = string | urlFnType;
type optionsType = {
  url?: string;
  segments?: any;
  params?: any;
  body?: any;
  headers?: any;
};
type fetchOptionsType = {
  url?: string;
  params?: any;
  body?: any;
};
