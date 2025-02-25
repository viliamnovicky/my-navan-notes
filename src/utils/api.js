import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { database } from './firebase';  // Import the initialized Firestore instance
import { deleteDoc, query, where, updateDoc  } from "firebase/firestore/lite";
// Function to get templates from Firestore
export const getTemplates = async () => {
  try {
    // Reference to the 'templates' collection in Firestore
    const templatesCollection = collection(database, 'templates');
    const templatesSnapshot = await getDocs(templatesCollection);

    if (templatesSnapshot.empty) {
      console.log("No templates found.");
      return [];
    }

    // Map the documents to include the document ID
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
    const templatesCollection = collection(database, 'templates');
    const docRef = await addDoc(templatesCollection, {
      name: data.name,
      text: data.text
    });

    console.log("Document written with ID: ", docRef.id);
    return { id: docRef.id};
  } catch (error) {
    console.error("Error adding template: ", error);
    throw new Error("Failed to add template");
  }
};

export async function deleteTemplate(name) {
  // Get the reference to the 'templates' collection
  const templateRef = collection(database, 'templates');
  
  // Query the collection for the document with the specific name
  const q = query(templateRef, where("name", "==", name));

  try {
    // Get the documents matching the query
    const querySnapshot = await getDocs(q);

    // Ensure that a document with the specified name exists
    if (!querySnapshot.empty) {
      const templateDocRef = querySnapshot.docs[0].ref; // Get the reference of the first document

      // Delete the document
      await deleteDoc(templateDocRef);
      console.log(`Template with name ${name} deleted successfully.`);
    } else {
      console.error(`No template found with name: ${name}`);
    }
  } catch (error) {
    console.error("Error deleting template from Firestore:", error);
    throw error; // Rethrow the error for better error handling
  }
}

export async function updateTemplate(name, updatedName, updatedText) {
  const templateRef = collection(database, "templates");
  const q = query(templateRef, where("name", "==", name));

  try {
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.error(`No template found with name: ${name}`);
      return;
    }

    // Proceed with updating
    const templateDocRef = querySnapshot.docs[0].ref;
    await updateDoc(templateDocRef, {
      name: updatedName,
      text: updatedText,
    });

    console.log(`Template with name ${name} updated successfully.`);
  } catch (error) {
    console.error("Error updating template in Firestore:", error);
  }
}
