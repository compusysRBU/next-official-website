import { useEffect, useRef } from "react";
import styled from "styled-components";

interface HamProps {
	isOpen?: boolean;
	onChange?: (isOpen: boolean) => void;
}

const Ham = ({ isOpen, onChange }: HamProps) => {
	const checkboxRef = useRef<HTMLInputElement>(null);

	// Sync checkbox state with isOpen prop if provided
	useEffect(() => {
		if (checkboxRef.current && isOpen !== undefined) {
			checkboxRef.current.checked = isOpen;
		}
	}, [isOpen]);

	const handleChange = () => {
		if (onChange) {
			onChange(checkboxRef.current?.checked || false);
		}
	};

	return (
		<Wrapper>
			<label className="hamburger">
				<input type="checkbox" ref={checkboxRef} onChange={handleChange} aria-label="Menu toggle" />
				<div className="lines">
					<span></span>
					<span></span>
				</div>
				<p className="menu-text font-mont font-extrabold text-lg leading-tight tracking-wider">MENU</p>
			</label>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.hamburger {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 0.35rem;
	}

	.hamburger input {
		display: none;
	}

	.lines {
		display: flex;
		flex-direction: column;
		align-items: flex-end; /* align bars to the LEFT */
		gap: 0.35rem;
	}

	.lines span {
		display: block;
		height: 4px;
		width: 14px;
		background: black;
		border-radius: 0px;
		transition: width 0.3s ease;
	}

	/* hover: both expand equally */
	.hamburger:hover .lines span {
		width: 60px;
	}
`;

export default Ham;
