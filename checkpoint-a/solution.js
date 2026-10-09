// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

/**
 * 1. loadOrders()
 * async. Returns every order from the database, as an array.
 */
export async function loadOrders() {
  return await findAllOrders();
}

/**
 * 2. myOrders(orders)
 * Takes an array of orders. Returns only the ones that are both:
 * - from Alexandria, and
 * - with status pending
 */
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Alexandria" && order.status === "pending"
  );
}

/**
 * 3. summarize(orders)
 * Takes an array of orders. Returns total quantity of items as a number.
 */
export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

/**
 * 4. describeOrder(id)
 * async. Looks up one order by its id and returns "{student}: {item} x{quantity}".
 * If not found, catches error and returns "Order {id} not found".
 */
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `Order ${id} not found`;
  }
}

/**
 * 5. toJsonLines(orders)
 * Takes an array of orders. Returns JSON text keeping only item and price.
 */
export function toJsonLines(orders) {
  const simplified = orders.map(({ item, price }) => ({ item, price }));
  return JSON.stringify(simplified);
}
