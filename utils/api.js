const API_BASE_URL = "http://localhost:3000/api";

export async function fetchDepartments() {
  try {
    const response = await fetch(`${API_BASE_URL}/departments`);
    if (!response.ok) throw new Error('Failed to fetch departments');
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchPeople() {
  try {
    const response = await fetch(`${API_BASE_URL}/people`);
    if (!response.ok) throw new Error('Failed to fetch people');
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchPersonById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/person/${id}`);
    if (!response.ok) throw new Error('Failed to fetch person');
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// export async function addPerson(personData) {
//   try {
//     const response = await fetch(`${API_BASE_URL}/person`);
//     if (!response.ok) throw new Error('Failed to fetch person', personData);
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }

// export async function updatePerson(id, updatedData) {
//   try {
//     const response = await fetch(`${API_BASE_URL}/Categories`);
//     if (!response.ok) throw new Error('Failed to fupdatePerson'id, updatedData);
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }

// export async function deletePerson(id) {
//   try {
//     const response = await fetch(`${API_BASE_URL}/person`);
//     if (!response.ok) throw new Error('Failed to fdeletePerson'id);
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// }