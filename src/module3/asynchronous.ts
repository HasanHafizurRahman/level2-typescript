// mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "hello asynchronous promise";
    if (data) {
      resolve(data);
    } else {
      reject("failed to resolve promise");
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
