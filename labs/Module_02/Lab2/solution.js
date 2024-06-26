import { EventStoreDBClient,START } from "@eventstore/db-client";

// Create an EventStoreDB client
const client = EventStoreDBClient.connectionString("esdb://localhost:2113?tls=false");

let totalKeyboardSales = 0

const subscription = client
 .subscribeToStream("order-123", {
   fromRevision: START,
 })
 .on("data", (resolvedEvent) => {
   handleEvent(resolvedEvent);
 });

// Define the event handler function
const handleEvent = async (resolvedEvent) => {
 const eventData = resolvedEvent.event?.data;
 if (eventData && resolvedEvent.event?.type === "itemShipped" && eventData.item === "keyboard" ) {
   console.log("Received event:", eventData);
   totalKeyboardSales += parseFloat(eventData.amount);
   console.log("the total keyboard sales is: " + totalKeyboardSales);
 }
};
