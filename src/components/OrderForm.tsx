import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({
    soortBestelling: "",
    naam: "",
    telefoon: "",
    email: "",
    bezorgadres: "",
    bezorgdatum: "",
    bezorgtijd: "",
    bericht: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-order-email', {
        body: form,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      console.error('Order error:', err);
      toast({
        title: "Er ging iets mis",
        description: "De bestelling kon niet worden verzonden. Probeer het opnieuw of bel ons.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
        <Button variant="outline" onClick={() => { setSubmitted(false); }}>
          Nieuwe bestelling
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div className="space-y-2">
        <Label>Wat wilt u bestellen? *</Label>
        <Input
          placeholder="Bijv. boeket, rouwstuk, bruidsboeket…"
          value={form.soortBestelling}
          onChange={(e) => update("soortBestelling", e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Uw naam *</Label>
          <Input value={form.naam} onChange={(e) => update("naam", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label>Telefoonnummer *</Label>
          <Input type="tel" value={form.telefoon} onChange={(e) => update("telefoon", e.target.value)} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label>E-mailadres *</Label>
        <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required />
      </div>

      <div className="space-y-2">
        <Label>Bezorgadres</Label>
        <Input
          placeholder="Straat, postcode, plaats"
          value={form.bezorgadres}
          onChange={(e) => update("bezorgadres", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Gewenste bezorgdatum</Label>
          <Input type="date" value={form.bezorgdatum} onChange={(e) => update("bezorgdatum", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Bezorgtijd</Label>
          <Select value={form.bezorgtijd} onValueChange={(v) => update("bezorgtijd", v)}>
            <SelectTrigger><SelectValue placeholder="Kies een moment" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="ochtend">Ochtend</SelectItem>
              <SelectItem value="middag">Middag</SelectItem>
              <SelectItem value="avond">Avond</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Bericht of bijzonderheden</Label>
        <Textarea
          placeholder="Bijv. kaartje, kleurvoorkeur, budget…"
          value={form.bericht}
          onChange={(e) => update("bericht", e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" variant="warm" size="lg" className="w-full" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? "Verzenden…" : "Bestel bloemen"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Na ontvangst nemen wij telefonisch contact met u op om alles af te stemmen.
        U ontvangt daarna een Tikkie voor de betaling.
      </p>
    </form>
  );
}
