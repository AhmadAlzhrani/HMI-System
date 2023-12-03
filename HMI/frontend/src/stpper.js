import React from 'react'; 
import Stepper from '@material-ui/core/Stepper'; 
import Step from '@material-ui/core/Step'; 
import StepLabel from '@material-ui/core/StepLabel'; 
import StepContent from '@material-ui/core/StepContent'; 
import t1 from './t1.png'
import t2 from './t2.png'
import t3 from './t3.png'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import m1 from './m1.png'
import m2 from './m2.png'
import m3 from './m3.png'
import { MdRamenDining } from "react-icons/md";

var p1_images = [m1,m2,m3]
var p2_images = [s1,s2,s3]
var p3_images = [t1,t2,t3]

var p1_names = ['Penne','Orecchitte','Spaghetti']
var p2_names = ['Tomato Sauce','Pesto Sauce','Alfredo Sauce']
var p3_names = ['Grilled Chicken','Beef','Vegetables']
var discribtion = ['- Macaroni discribtion','- Toppings discribtion','- Sauce discribtion','COST']
var order = ['','','']
var page = 0

const setPage = (index) => {
	page = page +index
}
const setOrder = (index) => {
	order[page] = index
}

function imageList(pageImage, pageNames){

	return <div className='flex space-x-10'>
		<div className='w-[155] h-[155]'>
						<img class=' object-center object-cover w-[150px] h-[150px] rounded-3xl border-2 border-black hover:border-blue-600 hover:border-4' onClick={() => { setOrder(0) }} src={pageImage[0]}  alt="Logo" />
						<text className='bottom-0 px-4 py-3'>{pageNames[0]}</text>
		</div>
		<div className='w-[155] h-[155]'>
						<img class=' object-center object-cover w-[150px] h-[150px] rounded-3xl border-2 border-black hover:border-blue-600 hover:border-4' onClick={() => { setOrder(1) }} src={pageImage[1]}   alt="Logo" />
						<text className='bottom-0 px-4 py-3'>{pageNames[1]}</text>
		</div>
		<div className='w-[155] h-[155]'>
						<img class=' object-center object-cover w-[150px] h-[150px] rounded-3xl border-2 border-black hover:border-blue-600 hover:border-4'  onClick={() => { setOrder(2) }} src={pageImage[2]}  alt="Logo" />
						<text className='bottom-0 px-4 py-3'>{pageNames[2]}</text>
		</div>
	</div>
}

function getImage(step){
	switch (step) {
		case 0:
			return imageList(p1_images, p1_names);
		case 1:
			return imageList(p3_images, p3_names);
		case 2:
			return imageList(p2_images, p2_names);
		default:
			return <div className='grid justify-items-center'>
				<div>{<MdRamenDining size="100"/>}</div>
				<text className=' text-blue-600 text-left'>
					<text className=' text-black text-center'>Your Order :</text>
					<li>Macaroni: {p1_names[order[0]]}</li>
					<li>Topping: {p3_names[order[1]]}</li>
					<li>Sauce: {p2_names[order[2]]}</li>
				</text>
				</div>;
	}
}

function getSteps() { 
return [<b className=' text-black' >'Macaroni'</b>, 
	<b className=' text-black'>'Toppings'</b>, 
	<b className=' text-black'>'Sauce'</b>]; 
} 

function getStepContent(step) {

	switch (step) {
		case 0:
			return 'Choose your Macaroni type';
		case 1:
			return 'Choose your Toppings';
		case 2:
			return 'Add Sauce ?';
		default:
			return 'Unknown step';
	}
}

export default function Steppers() { 
const [activeStep, setActiveStep] = React.useState(0); 
const steps = getSteps(); 

const handleNext = () => { 
	setPage(1)
	setActiveStep((prevActiveStep) => prevActiveStep + 1); 
}; 

const handleBack = () => {
	setPage(-1) 
	setActiveStep((prevActiveStep) => prevActiveStep - 1); 
}; 

const handleReset = () => { 
	setActiveStep(0); 
};

return ( 
	<div className='flex columns-2'>
		<div className=' h-[99vh] w-[60vh] pt-10 shadow-lg'>
			<div className="sidebar-icon">{<MdRamenDining size="30" color='white'/>}</div>
			<Stepper activeStep={activeStep} orientation="vertical"> 
				{steps.map((label, index) => ( 
				<Step key={label}> 
					<StepLabel color='black'>{label}</StepLabel> 
					<StepContent> 
					<h1 className=''>{getStepContent(index)}</h1>  
					</StepContent> 
				</Step> 
			))} 
			</Stepper> 
			{activeStep === steps.length && ( 
				<div className='grid text-center p-5' >  
				<button onClick={handleReset} className={' primary-button'}> 
					Pay 
				</button> 
				<text className='p-5'> 
					CLICK DOWN TO SET ORDER 
				</text>
				</div> 
			)} 
		</div>
		<div className='h-[99vh] w-[120vh] text-center'>
			<div className='w-[119vh] h-[450px]'>
				<div className='flex h-[400px] justify-center items-center border-2 m-4 rounded-md border-blue-100 shadow-md'>
					{getImage(activeStep)}
				</div>
				<div className= {activeStep===3?' text-left text-2xl px-8': 'text-left px-8'} > {discribtion[activeStep]} </div>
			</div>
			<div className= {activeStep===3?'w-[119vh] h-[140px] content-end top-0': 'w-[119vh] h-[140px] space-x-60 content-end ' }>
				<button className='primary-button' onClick={handleBack} disabled={activeStep === 0} style={{display:activeStep===3? 'none':''}}>
					Back
				</button>
				<button className='primary-button' onClick={handleNext} disabled={activeStep===3} style={{display:activeStep===3? 'none':''}}>
					{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
				</button>
				<div className=' rounded-md text-left px-8 columns-2' style={{display:activeStep===3? '':'none'}}>
					<div className='text-black columns:1'>
						<h2 className='text-black '>{p1_names[order[0]]}</h2>
						<h2 className='text-black '>{p2_names[order[1]]}</h2>
						<h2 className='text-black '>{p3_names[order[2]]}</h2>
						<line>__________________</line>
						<h2 className='text-black '>Total</h2>
					</div>
					<div className='text-black columns:2'>
						<h2 className='text-black '>- 5 SR</h2>
						<h2 className='text-black '>- 3 SR</h2>
						<h2 className='text-black '>- 2 SR</h2>
						<line>__________________</line>
						<h1 className='text-black '>- 10 SR</h1>

					</div>
				</div>
			</div>
		</div>
	</div> 
); 
} 