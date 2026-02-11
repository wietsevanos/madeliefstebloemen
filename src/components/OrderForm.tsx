import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ChevronLeft, Send } from "lucide-react";

const STEPS = [
  "Bestelling",
  "Bezorgadres",
  "Uw gegevens",
  "Details",
];

export default function OrderForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    soortBestelling: "",
    soortAnders: "",
    // bezorgadres
    naamOntvanger: "",
    straatOntvanger: "",
    postcodeOntvanger: "",
    plaatsOntvanger: "",
    telefoonOntvanger: "",
    // opdrachtgever
    naamOpdrachtgever: "",
    straatOpdrachtgever: "",
    postcodeOpdrachtgever: "",
    plaatsOpdrachtgever: "",
    telefoonOpdrachtgever: "",
    emailOpdrachtgever: "",
    // details
    bezorgdatum: "",
    bezorgtijd: "",
    kaartje: "",
    bijzonderheden: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto body
    const lines = [
      `Soort bestelling: ${form.soortBestelling}${form.soortAnders ? ` – ${form.soortAnders}` : ""}`,
      "",
      "— Bezorgadres —",
      `Naam: ${form.naamOntvanger}`,
      `Adres: ${form.straatOntvanger}, ${form.postcodeOntvanger} ${form.plaatsOntvanger}`,
      `Telefoon: ${form.telefoonOntvanger}`,
      "",
      "— Opdrachtgever —",
      `Naam: ${form.naamOpdrachtgever}`,
      `Adres: ${form.straatOpdrachtgever}, ${form.postcodeOpdrachtgever} ${form.plaatsOpdrachtgever}`,
      `Telefoon: ${form.telefoonOpdrachtgever}`,
      `E-mail: ${form.emailOpdrachtgever}`,
      "",
      "— Details —",
      `Bezorgdatum: ${form.bezorgdatum}`,
      `Bezorgtijd: ${form.bezorgtijd}`,
      `Kaartje: ${form.kaartje}`,
      `Bijzonderheden: ${form.bijzonderheden}`,
    ];
    const subject = encodeURIComponent("Bestelling via website");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:madeliefstebloemen@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">💐</span>
        </div>
        <h3 className="font-heading text-xl font-semibold">Bedankt voor uw bestelling!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Na ontvangst nemen wij telefonisch contact met u op om alles zorgvuldig af te stemmen.
          U ontvangt daarna een Tikkie voor de betaling.
        </p>
        <Button variant="outline" onClick={() => { setSubmitted(false); setStep(0); }}>
          Nieuwe bestelling
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors ${
                i <= step
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
            <span className="hidden sm:inline text-sm text-muted-foreground">{label}</span>
            {i < STEPS.length - 1 && (
              <div className={`w-6 md:w-12 h-0.5 ${i < step ? "bg-primary" : "bg-muted"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Soort bestelling */}
      {step === 0 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Soort bestelling</Label>
            <Input
              placeholder="Bijv. boeket, rouwstuk, bruidsboeket…"
              value={form.soortBestelling}
              onChange={(e) => update("soortBestelling", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Anders, namelijk…</Label>
            <Input
              placeholder="Optioneel"
              value={form.soortAnders}
              onChange={(e) => update("soortAnders", e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Step 2: Bezorgadres */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Naam ontvanger *</Label>
            <Input value={form.naamOntvanger} onChange={(e) => update("naamOntvanger", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Straat + huisnummer *</Label>
            <Input value={form.straatOntvanger} onChange={(e) => update("straatOntvanger", e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Postcode *</Label>
              <Input value={form.postcodeOntvanger} onChange={(e) => update("postcodeOntvanger", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Plaats *</Label>
              <Input value={form.plaatsOntvanger} onChange={(e) => update("plaatsOntvanger", e.target.value)} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Telefoonnummer ontvanger</Label>
            <Input type="tel" value={form.telefoonOntvanger} onChange={(e) => update("telefoonOntvanger", e.target.value)} />
          </div>
        </div>
      )}

      {/* Step 3: Opdrachtgever */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Uw naam *</Label>
            <Input value={form.naamOpdrachtgever} onChange={(e) => update("naamOpdrachtgever", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Straat + huisnummer *</Label>
            <Input value={form.straatOpdrachtgever} onChange={(e) => update("straatOpdrachtgever", e.target.value)} required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Postcode *</Label>
              <Input value={form.postcodeOpdrachtgever} onChange={(e) => update("postcodeOpdrachtgever", e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Plaats *</Label>
              <Input value={form.plaatsOpdrachtgever} onChange={(e) => update("plaatsOpdrachtgever", e.target.value)} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Telefoonnummer *</Label>
            <Input type="tel" value={form.telefoonOpdrachtgever} onChange={(e) => update("telefoonOpdrachtgever", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>E-mailadres *</Label>
            <Input type="email" value={form.emailOpdrachtgever} onChange={(e) => update("emailOpdrachtgever", e.target.value)} required />
          </div>
        </div>
      )}

      {/* Step 4: Details */}
      {step === 3 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Gewenste bezorgdatum *</Label>
            <Input type="date" value={form.bezorgdatum} onChange={(e) => update("bezorgdatum", e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label>Gewenste bezorgtijd</Label>
            <Select value={form.bezorgtijd} onValueChange={(v) => update("bezorgtijd", v)}>
              <SelectTrigger><SelectValue placeholder="Kies een moment" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ochtend">Ochtend</SelectItem>
                <SelectItem value="middag">Middag</SelectItem>
                <SelectItem value="avond">Avond</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Bericht voor op het kaartje</Label>
            <Textarea
              placeholder="Bijv. Gefeliciteerd met jullie trouwdag!"
              value={form.kaartje}
              onChange={(e) => update("kaartje", e.target.value)}
              rows={3}
            />
          </div>
          <div className="space-y-2">
            <Label>Bijzonderheden</Label>
            <Textarea
              placeholder="Bijv. kleurvoorkeur, budget, allergieën…"
              value={form.bijzonderheden}
              onChange={(e) => update("bijzonderheden", e.target.value)}
              rows={3}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
        >
          <ChevronLeft className="w-4 h-4" />
          Vorige
        </Button>

        {step < STEPS.length - 1 ? (
          <Button type="button" onClick={() => setStep((s) => s + 1)}>
            Volgende
            <ChevronRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button type="submit" variant="warm" size="lg">
            <Send className="w-4 h-4" />
            Bestel bloemen
          </Button>
        )}
      </div>

      {step === STEPS.length - 1 && (
        <p className="text-sm text-muted-foreground text-center mt-6">
          Na ontvangst nemen wij telefonisch contact met u op om alles zorgvuldig af te stemmen.
          U ontvangt daarna een Tikkie voor de betaling.
        </p>
      )}
    </form>
  );
}
