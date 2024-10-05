export const usePostNumbers = async (numbersList: string[]) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ numbers: numbersList }),
  };

  try {
    const response = await fetch(
      "https://api.blacklistalliance.net/bulklookup?key=eFxfGbKrZ9jV2hwJu42J",
      options
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending list of phone numbers", error);
    throw error;
  }
};
