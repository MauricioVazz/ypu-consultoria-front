"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { loginAdmin } from "@/services/auth.service";

import {
    LoginContainer,
    ImagePanel,
    ImageOverlay,
    Brand,
    BrandLogo,
    BrandMessage,
    FormPanel,
    FormContent,
    FormEyebrow,
    FormTitle,
    FormDescription,
    Form,
    FormGroup,
    Label,
    Input,
    SubmitButton,
    ErrorMessage,
    FooterText,
} from "./styles";

export default function LoginForm() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        if (isLoading) return;

        try {
            setIsLoading(true);
            setError("");

            await loginAdmin(email, password);

            router.replace("/projetos");
        } catch (error) {
            setError(
                error.message || "Não foi possível realizar o login."
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <LoginContainer>
            <ImagePanel>
                <ImageOverlay />

                <Brand>
                    <BrandLogo>
                        <Image
                            src="/images/logo.png"
                            alt="YPU Consultoria Ambiental"
                            width={150}
                            height={70}
                            priority
                        />
                    </BrandLogo>
                </Brand>

                <BrandMessage>
                    <span>ÁREA ADMINISTRATIVA</span>

                    <h1>
                        Gestão ambiental
                        <br />
                        com propósito.
                    </h1>

                    <p>
                        Gerencie projetos, conteúdos e soluções
                        socioambientais da YPU Consultoria Ambiental.
                    </p>
                </BrandMessage>
            </ImagePanel>

            <FormPanel>
                <FormContent>
                    <FormEyebrow>
                        ACESSO RESTRITO
                    </FormEyebrow>

                    <FormTitle>
                        Bem-vindo de volta.
                    </FormTitle>

                    <FormDescription>
                        Entre com suas credenciais para acessar
                        o painel administrativo.
                    </FormDescription>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="email">
                                E-mail
                            </Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                autoComplete="username"
                                required
                                disabled={isLoading}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">
                                Senha
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                                autoComplete="current-password"
                                required
                                disabled={isLoading}
                            />
                        </FormGroup>

                        {error && (
                            <ErrorMessage role="alert">
                                {error}
                            </ErrorMessage>
                        )}

                        <SubmitButton
                            type="submit"
                            disabled={isLoading || !email || !password}
                        >
                            {isLoading ? "Entrando..." : "Entrar no painel"}
                        </SubmitButton>
                    </Form>

                    <FooterText>
                        YPU Consultoria Ambiental
                    </FooterText>
                </FormContent>
            </FormPanel>
        </LoginContainer>
    );
}
