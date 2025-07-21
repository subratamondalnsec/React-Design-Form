import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fromData, setfromData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"",
    StreetAddress:"",
    City:"",
    State:"",
    PinCode:"",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification:""

  })
  // console.log(fromData);
  function ChangeHandler(event){
    const {name,value,type,checked}=event.target;
    setfromData((currData)=>{
      return {...currData,[name]: type==='checkbox'?checked : value }
    })
  }
  function SubmitHandler(event){
    event.preventDefault();
    console.log(fromData);
    setfromData((currData)=>{
      return {...currData,
        firstname:"",
        lastname:"",
        email:"",
        country:"",
        StreetAddress:"",
        City:"",
        State:"",
        PinCode:"",
        comments: false,
        candidate: false,
        offers: false,
        pushNotification:""
       }
    })
  }
  return (
    <>
      <h2 className='text-center mt-2 text-4xl font-bold'>From Created by Subtara</h2> 
      <br/>
      <div className="w-full md:max-w-[50%] p-8 mx-auto shadow ring-2 ring-gray-300/50 rounded">
        <form onSubmit={SubmitHandler}  > 
          <label htmlFor='First' className='text-gray-900 leading-6 font-medium text-sm mt-1 ' >First Name</label>
          <br/>
          <input

            id='First'
            type='text'
            onChange={ChangeHandler}
            value={fromData.firstname}
            name='firstname'
            placeholder="Subrata"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label htmlFor='Last' className='text-gray-900 leading-6 font-medium text-sm mt-1 '>Last Name</label>
          <br/>
          <input
            id='Last'
            type='text'
            onChange={ChangeHandler}
            value={fromData.lastname}
            name='lastname'
            placeholder="Last Name"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='mail' >Email Address</label>
          <br/>
          <input
            id='mail'
            type='email'
            onChange={ChangeHandler}
            value={fromData.email}
            name='email'
            placeholder="subrata@gmail.com"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='country'>country</label>
          <br/>
          <select 
            id='country'
            onChange={ChangeHandler}
            value={fromData.country}
            name='country'
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          >
           <option value="Select your Country">Select your Country</option>
          <option value="India">India</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="United States">United States</option>

          </select>
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='street' >Street Address</label>
          <br/>
          <input
            id='street'
            type='text'
            onChange={ChangeHandler}
            value={fromData.StreetAddress}
            name='StreetAddress'
            placeholder="1234 Main st"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='City' >City</label>
          <br/>
          <input
            id='City'
            type='text'
            onChange={ChangeHandler}
            value={fromData.City}
            name='City'
            placeholder="Asansol"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='State' >State/pravince</label>
          <br/>
          <input
            id='State'
            type='text'
            onChange={ChangeHandler}
            value={fromData.State}
            name='State'
            placeholder="West Bengal"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>
          <label className='text-gray-900 leading-6 font-medium text-sm mt-1 ' htmlFor='PinCode' >ZIP/Postal Code/PinCode</label>
          <br/>
          <input
            id='PinCode'
            type='number'
            onChange={ChangeHandler}
            value={fromData.PinCode}
            name='PinCode'
            placeholder="713378"
            className="w-[90%] p-2  shadow-sm mt-2 rounded-md outline-1 outline-offset-1 text-gray-900 placeholder:text-gray-400 outline-indigo-300 focus-within:outline-3 focus-within:outline-indigo-800"
          />
        
          <br/>

          <fieldset className='mt-2'>
            <legend className="font-medium text-gray-900 leading-6 mb-3"  >By Email</legend>
            <div className="flex mb-3">
              <div className='flex items-center h-6'>
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  checked={fromData.comments}
                  onChange={ChangeHandler}
                  className='rounded h-4 w-4 cursor-pointer'
                />
              </div>

              <div className='ml-3 leading-6 '>
                <label className='text-gray-900  font-medium ' htmlFor="comments">Comments</label>
                <p className='text-gray-500'>Get notified when someones posts a comment on a posting</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              <div className='flex items-center h-6'>
                <input
                  type="checkbox"
                  id="candidate"
                  name="candidate"
                  checked={fromData.candidate}
                  onChange={ChangeHandler}
                  className='rounded h-4 w-4 cursor-pointer'
                />
                </div>
              <div className='ml-3 leading-6 '>
                <label className='text-gray-900 leading-6 font-medium' htmlFor="candidate">Candidate</label>
                <p className='text-gray-500'>Get notified when someones posts a comment on a posting</p>
              </div>
            </div>

            <div className="flex mb-3">
              <div className='flex items-center h-6 cursor-pointer'>
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={fromData.offers}
                  onChange={ChangeHandler}
                  className='rounded h-4 w-4 cursor-pointer'
                />
              </div>
              <div className='ml-3 leading-6'>
                <label className='text-gray-900 leading-6 font-medium' htmlFor="offers">Offers</label>
                <p className='text-gray-500'>Get notified when someones posts a comment on a posting</p>
              </div>
            </div>
          </fieldset>


          <fieldset>
            <div className='mb-2'>
              <legend className='font-medium text-gray-900 leading-6'>Push Notification</legend>
              <p className='text-gray-500 leading-6'>These are device via SMS to your Mobile phone</p>
            </div>
            <div className='flex flex-col'>
              <div className='my-1'>
                <input type="radio" id="pushEverything" name="pushNotification" value="Everything" onChange={ChangeHandler} className='rounded h-4 w-4 cursor-pointer'/>
                <label className='text-gray-900 leading-6 font-medium text-sm ml-2' htmlFor="pushEverything">Everything</label>
              </div>
              <div className='my-1'>
                <input type="radio" id="pushEmail" name="pushNotification" value="Same as email" onChange={ChangeHandler} className='rounded h-4 w-4 cursor-pointer'/>
                <label className='text-gray-900 leading-6 font-medium text-sm ml-2 ' htmlFor="pushEmail">Same as Email</label>
              </div>
              <div className='my-1'>
                <input type="radio" id="pushNothing" name="pushNotification" value="No Push Notification" onChange={ChangeHandler} className='rounded h-4 w-4 cursor-pointer'/>
                <label className='text-gray-900 leading-6 font-medium text-sm ml-2 ' htmlFor="pushNothing">No Push Notification</label>
              </div>
            </div>
          </fieldset>
          <div className='flex justify-center mt-4'>
            <button className=' px-6 py-2 font-bold rounded-md bg-blue-500 hover:bg-blue-700 cursor-pointer text-white' >Save</button>
          </div>
            
        </form>
      </div>
      <br/>
    </>
  )
}

export default App
