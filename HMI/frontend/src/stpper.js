import React from 'react'; 
import Stepper from '@material-ui/core/Stepper'; 
import Step from '@material-ui/core/Step'; 
import StepLabel from '@material-ui/core/StepLabel'; 
import StepContent from '@material-ui/core/StepContent'; 
import r1 from './ramen.png'
import r2 from './r.png'
import r3 from './r2.jpg'
import r4 from './end.jpg'	

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
	setActiveStep((prevActiveStep) => prevActiveStep + 1); 
}; 

const handleBack = () => { 
	setActiveStep((prevActiveStep) => prevActiveStep - 1); 
}; 

const handleReset = () => { 
	setActiveStep(0); 
};

var pics = [r1,r2,r3,r4]

return ( 
	<div className='flex columns-2 border-2 border-green-600'>
		<div className=' h-[99vh] w-[60vh] border-2 border-blue-600 pt-10'> 
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
			<div className='text-center p-5 ' > 
			<h1 className='p-5'> 
				CLICK DOWN TO SET ORDER 
			</h1> 
			<button onClick={handleReset} className={' primary-button'}> 
				Order 
			</button> 
			</div> 
		)} 
		</div>
		<div className=' border-2 border-red-600 h-[99vh] w-[120vh] text-center'>
			<div className='border-2 border-black w-[119vh] h-[520px]'>
				<div className=' columns-2 border-2 border-indigo-600 h-[400px] px-8 py-8'>
					<img class=' object-center object-cover w-[650px] h-[380px]' src={pics[activeStep]} alt="Logo" />
					<img class=' object-center object-cover w-[650px] h-[380px]' src={pics[activeStep]} alt="Logo" />
				</div>
				<h1 className='border-2 border-red-600'>hilow</h1>
			</div>
			<div className='border-2 border-black w-[119vh] h-[70px] space-x-60'>
				<button className='primary-button' onClick={handleBack} disabled={activeStep === 0}>
					Back
				</button>
				<button className='primary-button' onClick={handleNext} disabled={activeStep===3}>
					{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
				</button>
			</div>
		</div>
	</div> 
); 
} 