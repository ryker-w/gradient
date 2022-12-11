package internal

type Model struct {
	Name string  `json:"name"`
	X    float64 `json:"x"`
	Y    float64 `json:"y"`
	Z    float64 `json:"z"`
}

type Uplink struct {
	App  string     `json:"applicationId,omitempty"`
	Dev  string     `json:"deviceName,omitempty"`
	Data UplinkData `json:"data,omitempty"`
}

type UplinkData struct {
	X float64 `json:"x,omitempty"`
	Y float64 `json:"y,omitempty"`
	Z float64 `json:"z,omitempty"`
}
