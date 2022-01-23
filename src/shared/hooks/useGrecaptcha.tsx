import React, { useState, useCallback } from "react";

declare const grecaptcha;

export const useGrecaptcha = (siteKey) => {
  const [grcsiteKey, setGRCSiteKey] = useState(siteKey || "");
  const [grcaction, setGRCAction] = useState("");
  const [grcReady, setGRCReady] = useState(false);

  const setUserAction = useCallback((action) => setGRCAction(action), []);

  const onGrecaptchaError = (err) => {
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
          (err) =>
            (onErrorCallback && onErrorCallback(err)) || onGrecaptchaError(err)
        );
    });

  return { setGRCSiteKey, grcReady, grcExecute, setUserAction };
};
