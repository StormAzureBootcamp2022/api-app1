import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const users = [
        {
            firstName: "first1",
            lastName: "last1",
            email: "abc@gmail.com"
        },
        {
            firstName: "first2",
            lastName: "last2",
            email: "abc@gmail.com"
        },
        {
            firstName: "first3",
            lastName: "last3",
            email: "abc@gmail.com"
        }
    ];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: users
    };

};

export default httpTrigger;