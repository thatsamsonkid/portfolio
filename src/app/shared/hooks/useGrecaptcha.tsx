import React, { useState, useCallback } from "react";

declare const grecaptcha: any;

export const useGrecaptcha = (siteKey: any) => {
  const [grcsiteKey, setGRCSiteKey] = useState(siteKey || "");
  const [grcaction, setGRCAction] = useState("");
  const [grcReady, setGRCReady] = useState(false);

  const setUserAction = useCallback((action: any) => setGRCAction(action), []);

  const onGrecaptchaError = (err: any) => {
    throw Error(err);
  };

  const grcExecute = (executeFN: Function, onErrorCallback?: Function) =>
    grcsiteKey &&
    grecaptcha.ready(() => {
      setGRCReady(true);
      grecaptcha
        .execute(grcsiteKey, {
          action: grcaction,
        })
        .then(executeFN)
        .catch(
          (err: any) =>
            (onErrorCallback && onErrorCallback(err)) || onGrecaptchaError(err)
        );
    });

  return { setGRCSiteKey, grcReady, grcExecute, setUserAction };
};
