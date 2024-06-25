import { useAddObject, useRemoveObject, useUpdateObject } from "../services/mutateLocalStorage";

const { data: list = [{a: 1, b: 2}], refetch } = useFetchList(storageKey);

// Initialize mutations for add, update, and remove operations
const addObjectMutation = useAddObject(list, storageKey);
const updateObjectMutation = useUpdateObject(list, storageKey);
const removeObjectMutation = useRemoveObject(list, storageKey);

// Handlers for adding, updating, and removing items
const handleAddObject = () => {
  const newObject = { id: list.length + 1, name: `Item ${list.length + 1}` };
  addObjectMutation.mutate(newObject);
  console.log("click")

};

const handleUpdateObject = (index) => {
  const updatedObject = { ...list[index], name: `Updated ${list[index].name}` };
  updateObjectMutation.mutate({ index, updatedObject });
};

const handleRemoveObject = (index) => {
  removeObjectMutation.mutate(index);
};