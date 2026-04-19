import { collection, getDocs, addDoc } from "firebase/firestore";
import { deleteDoc, query, where, updateDoc } from "firebase/firestore";
// Function to get templates from Firestore
import { auth, database } from "../utils/firebase";

export const getTemplates = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      console.log("No user logged in.");
      return [];
    }

    // Path: users/{email}/Templates
    const templatesCollection = collection(database, "users", user.email, "Templates");

    const templatesSnapshot = await getDocs(templatesCollection);

    if (templatesSnapshot.empty) {
      console.log("No templates found.");
      return [];
    }

    const templates = templatesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return templates;
  } catch (error) {
    console.error("Error getting templates: ", error);
    return [];
  }
};

// Function to add a new template to Firestore
export const addTemplate = async (data) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not logged in");
    }

    // Path: users/{email}/Templates
    const templatesCollection = collection(database, "users", user.email, "Templates");

    const docRef = await addDoc(templatesCollection, {
      name: data.name,
      text: data.text,
      createdAt: Date.now(),
    });

    console.log("Template created with ID:", docRef.id);

    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding template:", error);
    throw new Error("Failed to add template");
  }
};

export async function deleteTemplate(name) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not logged in");
    }

    // Path: users/{email}/Templates
    const templatesRef = collection(database, "users", user.email, "Templates");

    // Query for template by name
    const q = query(templatesRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error(`No template found with name: ${name}`);
      return;
    }

    // Delete the first matching document
    const templateDocRef = querySnapshot.docs[0].ref;
    await deleteDoc(templateDocRef);

    console.log(`Template "${name}" deleted successfully.`);
  } catch (error) {
    console.error("Error deleting template:", error);
    throw error;
  }
}

export async function updateTemplate(name, updatedName, updatedText) {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User not logged in");
    }

    // Path: users/{email}/Templates
    const templatesRef = collection(database, "users", user.email, "Templates");

    // Query template by name
    const q = query(templatesRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error(`No template found with name: ${name}`);
      return;
    }

    // Update the first matching document
    const templateDocRef = querySnapshot.docs[0].ref;

    await updateDoc(templateDocRef, {
      name: updatedName,
      text: updatedText,
      updatedAt: Date.now(),
    });

    console.log(`Template "${name}" updated successfully.`);
  } catch (error) {
    console.error("Error updating template in Firestore:", error);
    throw error;
  }
}
