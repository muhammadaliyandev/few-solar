import { useEffect, useState } from 'react';
import { fetchLeads, setLeadStatus } from '../lib/api';

const KEY_STORE = 'few_solar_admin_key';

export default function AdminLeads() {
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem(KEY_STORE) || '');
  const [keyInput, setKeyInput] = useState('');
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState('');

  async function load(key) {
    setError('');
    try {
      setLeads(await fetchLeads(key));
    } catch (e) {
      setError(e.message);
      setLeads(null);
    }
  }

  useEffect(() => { if (adminKey) load(adminKey); }, []);

  function login(e) {
    e.preventDefault();
    const key = keyInput.trim();
    if (!key) return;
    sessionStorage.setItem(KEY_STORE, key);
    setAdminKey(key);
    load(key);
  }

  function logout() {
    sessionStorage.removeItem(KEY_STORE);
    setAdminKey('');
    setLeads(null);
  }

  async function changeStatus(id, status) {
    try {
      await setLeadStatus(adminKey, id, status);
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    } catch {
      setError('Status update failed — try again.');
    }
  }

  if (!adminKey) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <form onSubmit={login} className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm">
          <h1 className="font-display text-2xl font-bold text-navy mb-2">FEW Solar — Admin</h1>
          <p className="text-slate-500 text-sm mb-6">Leads dekhne ke liye admin key daalo.</p>
          <input
            type="password"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="Admin key"
            className="w-full bg-white border border-slate-200 focus:border-leaf-500 focus:ring-1 focus:ring-leaf-500 rounded-xl px-4 py-3 text-sm outline-none mb-4"
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="btn-cta w-full text-white font-bold py-3 px-6 rounded-full text-sm">View Leads</button>
          <a href="#" className="block text-center text-slate-400 text-xs mt-4">← Back to website</a>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-3xl font-bold text-navy">Leads</h1>
          <div className="flex gap-3">
            <a href="#" className="text-sm text-slate-500 py-2">Website</a>
            <button onClick={logout} className="text-sm font-semibold text-red-500 py-2">Logout</button>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {!leads && !error && <p className="text-slate-500">Loading…</p>}
        {leads && leads.length === 0 && <p className="text-slate-500">Abhi koi lead nahi aayi.</p>}
        {leads && leads.length > 0 && (
          <div className="bg-white rounded-3xl shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b">
                  <th className="p-4">Date</th><th className="p-4">Name</th><th className="p-4">Phone</th>
                  <th className="p-4">City</th><th className="p-4">Bill</th><th className="p-4">Source</th>
                  <th className="p-4">Message</th><th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} className="border-b last:border-0 align-top">
                    <td className="p-4 whitespace-nowrap">{new Date(l.created_at).toLocaleDateString()}</td>
                    <td className="p-4 font-semibold text-navy">{l.name}</td>
                    <td className="p-4 whitespace-nowrap">{l.phone}</td>
                    <td className="p-4">{l.city || '—'}</td>
                    <td className="p-4">{l.monthly_bill ? 'Rs ' + Number(l.monthly_bill).toLocaleString() : '—'}</td>
                    <td className="p-4">{l.source}</td>
                    <td className="p-4 max-w-xs">{l.message || '—'}</td>
                    <td className="p-4">
                      <select
                        value={l.status}
                        onChange={(e) => changeStatus(l.id, e.target.value)}
                        className="border border-slate-200 rounded-lg px-2 py-1 text-sm"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="done">Done</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
