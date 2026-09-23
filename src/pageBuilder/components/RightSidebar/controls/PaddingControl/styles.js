"use client";

import styled from "styled-components";

export const ControlContainer = styled.div`    display: flex;
    flex-direction: column;
    gap: 12px;`;

export const ControlHeader = styled.div`    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;`;

export const ModeSelect = styled.select`    width: auto;`;

export const FieldsContainer = styled.div`    display: flex;
    flex-direction: column;
    gap: 8px;`;

export const Field = styled.div`    display: flex;
    flex-direction: column;
    gap: 4px;`;

export const FieldLabel = styled.label`    font-size: 13px;`;

export const Select = styled.select`    width: 100%;`;
