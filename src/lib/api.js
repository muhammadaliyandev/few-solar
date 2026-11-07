// FEW Solar — API client
// VITE_API_URL na ho to local backend (localhost:3000) use hota hai.
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function submitLead(lead) {
  const res = await fetch(`${API_BASE}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Request failed');
  }
  return res.json();
}

export async function fetchLeads(adminKey) {
  const res = await fetch(`${API_BASE}/api/leads`, { headers: { 'x-admin-key': adminKey } });
  if (!res.ok) throw new Error(res.status === 401 ? 'Wrong admin key' : 'Could not load leads');
  return (await res.json()).leads;
}

export async function setLeadStatus(adminKey, id, status) {
  const res = await fetch(`${API_BASE}/api/leads/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', 'x-admin-key': adminKey },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) throw new Error('Could not update status');
  return res.json();
}
