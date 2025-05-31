# Item Module

## Module Overview
The Item module provides CRUD operations for managing items in the Master Data System. It includes input validation, error handling, and follows best practices for service-resolver separation. The module is designed as a template for future modules (e.g., Customer, Supplier).

### Features
- Create, read, update, and soft-delete items
- Input validation using Zod
- Custom error handling for duplicate and not found cases
- Prisma ORM integration
- Unit and resolver tests with >80% coverage

## Folder Structure
```
modules/item/
├── item.model.ts      # TypeScript model for Item
├── item.resolver.ts   # GraphQL resolvers for Item
├── item.schema.ts     # GraphQL schema definitions for Item
├── item.service.ts    # Business logic and DB access for Item
├── item.zod.ts        # Zod validation schema for Item
```

## Manual Testing Instructions

1. **Start the server**
   ```powershell
   npm run dev
   ```

2. **Open GraphQL Playground** (Apollo Studio, Insomnia, or similar)

3. **Test the following operations:**

   - **Create Item**
     ```graphql
     mutation {
       createItem(input: {
         skuCode: "ITEM100",
         name: "Test Item",
         unit: PCS,
         description: "Manual test item",
         price: 123.45
       }) {
         id
         skuCode
         name
         unit
         price
       }
     }
     ```

   - **Get Item**
     ```graphql
     query {
       getItem(id: 1) {
         id
         skuCode
         name
         unit
         price
       }
     }
     ```

   - **Update Item**
     ```graphql
     mutation {
       updateItem(input: {
         id: 1,
         name: "Updated Name",
         price: 200.00
       }) {
         id
         name
         price
       }
     }
     ```

   - **Delete Item**
     ```graphql
     mutation {
       deleteItem(id: 1) {
         id
         isDeleted
         isActive
       }
     }
     ```

   - **Get All Items**
     ```graphql
     query {
       getItems {
         id
         skuCode
         name
         unit
         price
       }
     }
     ```

4. **Check error handling:**
   - Try creating an item with a duplicate `skuCode` (should return a user-friendly error).
   - Try updating or deleting a non-existent item (should return "Item not found").

5. **Review response shapes and error messages for clarity and consistency.**

---

For more details, see the main project documentation and the finalized checklist in `docs/finalisasi_item.md`.
