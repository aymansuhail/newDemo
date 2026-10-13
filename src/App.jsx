import { useState } from 'react'
import { FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './App.css'

function Form({ formData, handleChange, handleSubmit, onClose, editId }) {
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-header'>
          <h2>{editId !== null ? 'Edit User' : 'Add User'}</h2>
          <button type='button' className='icon-button' onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Name'
            required
          />

          <label>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
            required
          />

          <label>Role</label>
          <select
            name='role'
            value={formData.role}
            onChange={handleChange}
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>

          <label>Status</label>
          <select
            name='status'
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="InActive">InActive</option>
          </select>

          <label>Joined</label>
          <input
            type='text'
            name='joined'
            value={formData.joined}
            onChange={handleChange}
          />

          <div className='modal-footer'>
            <button type='button' className='cancel-button' onClick={onClose}>
              Cancel
            </button>
            <button type='submit' className='submit-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Name one",
      email: "emailone@gmail.com",
      role: "User",
      status: "Active",
      joined: "Oct 13 2026"
    },
    {
      id: 2,
      name: "Name two",
      email: "emailtwo@gmail.com",
      role: "Admin",
      status: "Active",
      joined: "Oct 12 2026"
    },
    {
      id: 3,
      name: "Name three",
      email: "emailthree@gmail.com",
      role: "User",
      status: "Active",
      joined: "Oct 11 2026"
    },
  ])
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({

    id: "",
    name: "",
    email: "",
    role: "User",
    status: "Active",
    joined: "Oct 13 2026"

  })

  function handleEdit(user) {
    console.log(user)
    setEditId(user.id)

    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      joined: user.joined
    })

    setShowForm(true)
  }
  function handleDelete(id) {
    setUsers(users.filter((user) => user.id !== id))
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleAddUser() {
    setEditId(null)

    setFormData({
      name: "",
      email: "",
      role: "User",
      status: "Active",
      joined: "Oct 13 2026"
    })
    console.log(users)
    setShowForm(true)
  }

  function handleClose() {
    setShowForm(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (editId !== null) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? { ...formData, id: editId }
            : user
        )
      )
    }
    else {
      const newUser = {
        ...formData,
        id: Date.now()
      }
      setUsers([...users, newUser])
    }

    setShowForm(false)
  }

  return (
    <div className='layout'>
      <Sidebar />

      <div className='main'>
        <Navbar />

        <div className='content'>
          <div className='page-header'>
            <div>
              <h1>Users <span className='count'>{users.length}</span></h1>
              <p className='grey'>Manage user accounts, roles, and permissions.</p>
            </div>
            <button className='add-button' onClick={handleAddUser}>
              <FiPlus /> Add User
            </button>
          </div>

          <div className='table-box'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>joined</th>
                  <th className='right'>Actions</th>
                </tr>
              </thead>
              <tbody>

                {users.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <div className='user-cell'>
                        <div className='avatar'>{user.name.charAt(0)}</div>
                        <div>
                          <div className='user-name'>{user.name}</div>
                          <div className='grey small'>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className='badge'>{user.role}</span>
                    </td>
                    <td>
                      <span className={user.status === 'Active' ? 'badge active-status' : 'badge inactive-status'}>
                        ● {user.status}
                      </span>
                    </td>
                    <td>
                      {user.joined}
                    </td>

                    <td className='right'>
                      <button className='edit-button'
                        onClick={() => handleEdit(user)}
                      >
                        <FiEdit2 />
                      </button>

                      <button className='delete-button'
                        onClick={() => handleDelete(user.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className='table-footer'>
              Showing 1 to {users.length} of {users.length} users
            </div>
          </div>
        </div>
      </div>

      {
        showForm && (
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onClose={handleClose}
            editId={editId}
          />
        )
      }
    </div>
  )
}

export default App